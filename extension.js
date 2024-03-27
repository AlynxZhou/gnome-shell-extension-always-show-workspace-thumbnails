/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

import {
  ThumbnailsBox
} from "resource:///org/gnome/shell/ui/workspaceThumbnail.js";
import {
  InjectionManager
} from "resource:///org/gnome/shell/extensions/extension.js";

export default class AlwaysShowWorkspaceThumbnails {
  constructor() {
  }

  enable() {
    // NOTE: Don't use arrow expressions for the function used to inject, we
    // want it to use the calling context, but arrow expressions will bind this
    // extension object to it. Also the document is wrong, it says it will
    // change `this` for you, but actually not.
    this._injectionManager = new InjectionManager();

    // Just set true, so we can always show ThumbnailsBox.
    this._injectionManager.overrideMethod(
      ThumbnailsBox.prototype,
      "_updateShouldShow",
      () => {
        return function () {
          const {nWorkspaces} = global.workspace_manager;
          // AZ: If dynamic, don't check the number, always show it.
          // const shouldShow = this._settings.get_boolean("dynamic-workspaces")
          //   ? nWorkspaces > NUM_WORKSPACES_THRESHOLD
          //   : nWorkspaces > 1;
          const shouldShow = this._settings.get_boolean("dynamic-workspaces") ||
                nWorkspaces > 1;

          if (this._shouldShow === shouldShow) {
            return;
          }

          this._shouldShow = shouldShow;
          this.notify("should-show");
        };
      }
    );
  }

  disable() {
    if (this._injectionManager != null) {
      this._injectionManager.clear();
      this._injectionManager = null;
    }
  }
};
