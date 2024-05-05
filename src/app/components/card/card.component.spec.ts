import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CardComponent } from './card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { setCurrentSelectedPost } from '../../store/post.action';
import { Post } from '../../interface/post.type';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      providers: [provideMockStore({})],
      declarations: [], // Remove CardComponent from declarations array
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<any>>(Store) as MockStore<any>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if card is selected', () => {
    component.selectedCardId = 1;
    component.post.id = 1;

    expect(component.isCardSelected()).toBe(true);

    component.selectedCardId = 2;

    expect(component.isCardSelected()).toBe(false);
  });

  it('should handle card selection when same card is clicked again', () => {
    const post: any = {
      userId: 1,
      id: 1,
      body: 'Test Body',
      title: 'Test Title'
    };

    spyOn(store, 'dispatch');
    component.selectedCardId = 1;
    component.handleCardSelection(post);

    expect(store.dispatch).not.toHaveBeenCalled();
    expect(component.cardState).toEqual('flipped');
  });
});
