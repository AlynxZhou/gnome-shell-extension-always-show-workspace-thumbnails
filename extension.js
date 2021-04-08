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

/* exported init, enable, disable */

const {ThumbnailsBox} = imports.ui.workspaceThumbnail;

function init() {
  // This extension does not use init function.
}

function enable() {
  ThumbnailsBox.prototype._updateShouldShowOrig =
    ThumbnailsBox.prototype._updateShouldShow;
  // Just set true, so we can always show ThumbnailsBox.
  ThumbnailsBox.prototype._updateShouldShow = function () {
    /*
    const { nWorkspaces } = global.workspace_manager;
    const shouldShow = this._settings.get_boolean('dynamic-workspaces')
      ? nWorkspaces > NUM_WORKSPACES_THRESHOLD
      : nWorkspaces > 1;
    */

    // if (this._shouldShow === shouldShow)
    if (this._shouldShow === true)
      return;

    // this._shouldShow = shouldShow;
    this._shouldShow = true;
    this.notify('should-show');
  };
}

function disable () {
  if (ThumbnailsBox.prototype._updateShouldShowOrig instanceof Function) {
    ThumbnailsBox.prototype._updateShouldShow =
      ThumbnailsBox.prototype._updateShouldShowOrig;
    ThumbnailsBox.prototype._updateShouldShowOrig = undefined;
  }
}
