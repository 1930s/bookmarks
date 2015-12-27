/*
 * Copyright (c) 2015
 *
 * @author Arthur Schiwon
 * @copyright 2015 Arthur Schiwon <blizzz@owncloud.com>
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

(function() {

	if (!OCA.Bookmarks) {
		/**
		 * Namespace for the bookmarks app
		 * @namespace OCA.Bookmarks
		 */
		OCA.Bookmarks = {};
	}

	/**
	 * @namespace OCA.Bookmarks.App
	 */
	OCA.Bookmarks.App = {

		/**
		 * @member OCA.Bookmarks.TagCollection
		 */
		allTagsCollection: null,

		/**
		 * @member OCA.Bookmarks.TagCollection
		 */
		availableTagsCollection: null,

		/**
		 * @member OCA.Bookmarks.TagCollection
		 */
		selectedTagsCollection: null,

		/**
		 * @member OCA.Bookmarks.TagListView
		 */
		availableTagsList: null,

		/**
		 * @member OCA.Bookmarks.TagListView
		 */
		selectedTagsList: null,

		/**
		 * @member OCA.Bookmarks.TagFilterView
		 */
		tagFilterView: null,

		/**
		 * @member OCA.Bookmarks.SettingsView
		 */
		settingsView: null,

		/**
		 * @member OCA.Bookmarks.AddBookmarkView
		 */
		addBookmarkView: null,

		/**
		 * Initializes the bookmarks app
		 */
		initialize: function() {
			this.allTagsCollection       = new OCA.Bookmarks.TagCollection();
			this.availableTagsCollection = new OCA.Bookmarks.TagCollection();
			this.selectedTagsCollection  = new OCA.Bookmarks.TagCollection();

			this.availableTagsList       = new OCA.Bookmarks.TagListView({
				model: this.availableTagsCollection,
				id: 'availableTagsList'
			});
			this.selectedTagsList        = new OCA.Bookmarks.TagListView({
				model: this.selectedTagsCollection,
				id: 'selectedTagsList'
			});

			this.tagFilterView           = new OCA.Bookmarks.TagFilterView({
				collection: this.allTagsCollection,
				id: 'tagitManager',
				el: '#tag_filter input'
			});

			this.settingsView            = new OCA.Bookmarks.SettingsView({
				el: '#app-settings',
				id: 'appSettings'
			});

			this.addBookmarkView         = new OCA.Bookmarks.AddBookmarkView({
				el: '#add_form',
				id: 'addBookmark'
			});

			this.allTagsCollection.fetch();
			console.warn('INiT DONE');

			//FIXME: do be done by bookmarks collection
			getBookmarks();
		}
	};
})();

$(document).ready(function() {
	// wait for other apps/extensions to register their event handlers and file actions
	// in the "ready" clause
	_.defer(function() {
		OCA.Bookmarks.App.initialize();
	});
});
