import { observable, computed, action, runInAction, toJS } from 'mobx'

export default class {
  @observable loading = false

  @observable path = '/'

  showError (e:Error):void {
    alert(e.message)
  }

  goHome ():void {
    this.path = '/'
  }

  showForm (data:?Object):void {
    this.path = data ? '/modify' : '/add'

  }
}