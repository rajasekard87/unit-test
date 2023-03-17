describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;   beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      providers: [ UserService ]
    })
    .compileComponents();
  });   beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });   it('should create', () => {
    expect(component).toBeTruthy();
  });   it('should load user list when initialized', () => {
    const userList = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' }
    ];
    spyOn(userService, 'getUserList').and.returnValue(of(userList));
    component.ngOnInit();
    expect(component.userList).toEqual(userList);
  });
});
