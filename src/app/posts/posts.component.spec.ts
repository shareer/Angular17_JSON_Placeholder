import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { PostsComponent } from './posts.component';
import { By } from '@angular/platform-browser';
import { CardComponent } from '../components/card/card.component';
import { Post } from '../interface/post.type';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let store: MockStore<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsComponent, BrowserAnimationsModule],
      providers: [provideMockStore({})]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Cards Loading..." when postData is empty', () => {
    component.postData = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.no-card').textContent).toContain('Cards Loading...');
  });

  it('should dispatch fetchPosts action on ngOnInit', () => {
    const fetchPostsSpy = spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(fetchPostsSpy).toHaveBeenCalledOnceWith({ type: '[Post] Fetch Posts' });
  });

  it('should display cards when postData is not empty', () => {
    const mockPosts: Post[] = [
      { id: 1, userId: 1, title: 'Post 1', body: 'Content 1' },
      { id: 2, userId: 2, title: 'Post 2', body: 'Content 2' }
    ];
    component.postData = mockPosts;
    fixture.detectChanges();
    const cardComponents = fixture.debugElement.queryAll(By.directive(CardComponent));
    expect(cardComponents.length).toBe(mockPosts.length);
  });
});
