import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() selectedFeature = new EventEmitter<string>();
  private sub: Subscription
  private newcurrentUser: Subscription
  isAuthenticated = false

  constructor(
    private dataStorage: DataStorageService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.newcurrentUser = this.authService.currentUser.subscribe(user => {
      this.isAuthenticated = !!user
      // console.log(!user)
      // console.log(!!user)
    })
  }

  onSelect(feature: string) {
    this.selectedFeature.emit(feature)
  }

  onSaveData() {
    this.sub = this.dataStorage.storeRecipes().subscribe()
  }

  onFetchData() {
    this.sub = this.dataStorage.fetchRecipes().subscribe()
  }

  logout() {
    this.authService.logout()
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
    this.newcurrentUser.unsubscribe()
  }
}
