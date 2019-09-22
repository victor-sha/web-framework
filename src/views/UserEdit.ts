import {User, UserProps} from '../models/User';
import {View} from './View';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, UserProps> {
    regionsMap(): {[key: string]: string} {
        return {
            userForm: '.user-form',
            userShow: '.user-show'
        }
    }

    onRender(): void {
        new UserForm(this.regions.userForm, this.model).render()
        new UserShow(this.regions.userShow, this.model).render()
    }

    template(): string {
        return (`
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>`
        );
    }
}
