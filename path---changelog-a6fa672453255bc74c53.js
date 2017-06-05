webpackJsonp([5],{

/***/ "./node_modules/json-loader/index.js!./.cache/json/changelog.json":
/***/ (function(module, exports) {

	module.exports = {
		"data": {
			"allChangelog": {
				"edges": [
					{
						"node": {
							"title": "v1.0.0 - 2017-05-12",
							"content": "<h3>Features</h3>\n<ul>\n<li>Implement a dynamic finish page.</li>\n<li>Display nicer error dialog when reading an invalid image.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Prevent drive from getting re-mounted in macOS even when the unmount on success setting is enabled.</li>\n<li>Fix <code>ECONNRESET</code> and <code>ECONNREFUSED</code> errors when checking for updates on unstable connections.</li>\n<li>Fix application stuck at &quot;Starting...&quot; on Windows.</li>\n<li>Fix error on startup when Windows username contained an ampersand.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-rc.5 - 2017-05-02",
							"content": "<h3>Fixes</h3>\n<ul>\n<li>Fix various elevation issues on Windows</li>\n<li>Treat unknown images as octet stream</li>\n<li>Fix uncaught errors when cancelling elevation requests on Windows when the system's language is not English.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-rc.4 - 2017-04-22",
							"content": "<h3>Fixes</h3>\n<ul>\n<li>Fix &quot;Unmount failed&quot; on Windows where the PC is connected to network drives.</li>\n<li>Various fixes for when drive descriptions contain special characters.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Show a friendly user message on EIO after many retries.</li>\n<li>Show user friendly messages for <code>EBUSY, read</code> and <code>EBUSY, write</code> errors on macOS.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-rc.3 - 2017-04-14",
							"content": "<h3>Fixes</h3>\n<ul>\n<li>Show a user friendly message when the drive is unplugged half-way through.</li>\n<li>Fix &quot;UNKNOWN: unknown error&quot; error when unplugging an SD Card from an internal reader on Windows.</li>\n<li>Fix &quot;function createError(opts) {}&quot; error on validation failure.</li>\n<li>Fix &quot;Unmount failed, invalid drive&quot; error on Windows.</li>\n<li>Fix Apple disk image detection &amp; streaming.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Improve error reporting accuracy.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-rc.2 - 2017-04-11",
							"content": "<h3>Fixes</h3>\n<ul>\n<li>Display a user error if the image is no longer accessible when the writer starts.</li>\n<li>Prevent uncaught <code>EISDIR</code> when dropping a directory to the application.</li>\n<li>Fix &quot;Path must be a string. Received undefined&quot; when selecting Apple images.</li>\n<li>Don't interpret certain ISO images as unsupported.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-rc.1 - 2017-04-10",
							"content": "<h3>Features</h3>\n<ul>\n<li>Add support for Apple Disk images.</li>\n<li>Add the un-truncated drive description to the selected drive step tooltip.</li>\n<li>Prevent flashing an image that is larger than the drive with the CLI.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Prevent progress button percentage to exceed 100%.</li>\n<li>Don't print stack traces by default in the CLI.</li>\n<li>Prevent blank application when sending SIGINT on GNU/Linux and macOS.</li>\n<li>Fix unmounting freezing in macOS.</li>\n<li>Fix GNU/Linux udev error when <code>net.ifnames</code> is set.</li>\n<li>Fix <code>ENOSPC</code> image alignment errors.</li>\n<li>Fix errors when unplugging drives exactly when the drive scanning scripts are running.</li>\n<li>Fix several unmount related issues in all platforms.</li>\n<li>Fix &quot;rawr i'm a dinosaur&quot; bzip2 error.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Make errors more user friendly throughout the application.</li>\n<li>Don't report &quot;invalid archive&quot; errors to TrackJS.</li>\n<li>Stop drive scanning loop if an error occurs.</li>\n<li>Don't include user paths in Mixpanel analytics events.</li>\n<li>Provide a user friendly error message when no polkit authentication agent is available on the system.</li>\n<li>Show friendly drive name instead of device name in the main screen.</li>\n<li>Start reporting errors to Sentry instead of to TrackJS.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.19 - 2017-02-24",
							"content": "<h3>Features</h3>\n<ul>\n<li>Show warning when user tries to flash a Windows image</li>\n<li>Update the image step icon with an hexagonal &quot;plus&quot; icon.</li>\n<li>Update main page design to its new style.</li>\n<li>Swap the order of the drive and image selection steps.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Fix <code>transformRequest</code> error at startup when not connected to the internet, or when on an unstable connection.</li>\n<li>Prevent flashing the drive where the source image is located.</li>\n<li>Fix text overflowing on tooltips.</li>\n<li>Don't ignore errors coming from the Windows drive detection script.</li>\n<li>Omit empty SD Card readers in the drive selector on Windows.</li>\n<li>Fix &quot;Error: Command Failed&quot; error when unmounting on Windows.</li>\n<li>Fix duplicate error messages on some errors.</li>\n<li>Fix 'MySQL' is not recognised as an internal or external command error on Windows.</li>\n<li>Ignore <code>stderr</code> output from drive detection scripts if they exit with code zero.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Improve validation error message.</li>\n<li>Emit an analytics event on <code>ENOSPC</code>.</li>\n<li>Normalize button text casing.</li>\n<li>Don't auto select system drives in unsafe mode.</li>\n<li>Use a OS dialog to show the &quot;exit while flashing&quot; warning.</li>\n<li>Capitalize every text throughout the application.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.18 - 2017-01-16",
							"content": "<h3>Features</h3>\n<ul>\n<li>Improve Etcher CLI error messages.</li>\n<li>Replace the <code>--robot</code> CLI option with an <code>ETCHER_CLI_ROBOT</code> environment variable.</li>\n<li>Sort supported extensions alphabetically in the image file-picker.</li>\n<li>Label system drives in the drive-list widget.</li>\n<li>Show available Etcher version in the update notifier.</li>\n<li>Confirm before user quits while writing.</li>\n<li>Add a changelog link to the update notifier modal.</li>\n<li>Make the image file picker attach to the main window (as a real modal).</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Fix alignment of single call to action buttons inside modals.</li>\n<li>Fix &quot;Invalid message&quot; error caused by the IPC client emitting multiple JSON objects as a single message.</li>\n<li>Fix &quot;This key is already associated with an element of this collection&quot; error when multiple partitions point to the same drive letter on Windows.</li>\n<li>Fix system drives detected as removable drives on Mac Mini.</li>\n<li>Fix sporadic &quot;EIO: i/o error, read&quot; errors during validation.</li>\n<li>Fix &quot;EIO: i/o error, write&quot; error.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.17 - 2016-11-28",
							"content": "<h3>Fixes</h3>\n<ul>\n<li>Fix command line arguments not interpreted correctly when running the CLI with a custom named NodeJS binary.</li>\n<li>Wrap drive names and descriptions in the drive selector widget.</li>\n<li>Allow the user to press ESC to cancel a modal dialog.</li>\n<li>Fix &quot;Can't set the flashing state when not flashing&quot; error.</li>\n<li>Fix writing process remaining alive after the GUI is closed.</li>\n<li>Check available permissions in the CLI early on.</li>\n<li>Fix <code>this.log is not a function</code> error when clicking &quot;flash again&quot;.</li>\n<li>Fix duplicate drives in Windows.</li>\n<li>Fix drive scanning exceptions on GNU/Linux systems with <code>net.ifnames</code> enabled.</li>\n<li>Fix <code>0x80131700</code> error when scanning drives on Windows.</li>\n<li>Fix internal SDCard drive descriptions.</li>\n<li>Fix unmount issues in GNU/Linux and OS X when paths contain spaces.</li>\n<li>Fix &quot;Not Enough Space&quot; error when flashing unaligned images.</li>\n<li>Fix <code>at least one volume could not be unmounted</code> error in OS X.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.16 - 2016-10-28",
							"content": "<h3>Features</h3>\n<ul>\n<li>Use info icon instead of &quot;SHOW FULL FILE NAME&quot; in first step.</li>\n<li>Display image path base name as a tooltip on truncated image name.</li>\n<li>Add support for <code>etch</code> images.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Fix Etcher leaving zombie processes behind in GNU/Linux.</li>\n<li>Prevent escaping issues during elevation by surrounding paths in double quotes.</li>\n<li>Fix &quot;Unexpected end of JSON&quot; error in Windows.</li>\n<li>Fix drag and drop not working anymore.</li>\n<li>Don't clear selection state when re-selecting an image.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Publish standalone Windows builds.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.15 - 2016-09-26",
							"content": "<h3>Features</h3>\n<ul>\n<li>Allow the user to disable auto-update notifications with an environment variable.</li>\n<li>Allow images to declare a recommended minimum drive size.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Fix flashing never starting after elevation in GNU/Linux.</li>\n<li>Fix sporadic EPERM write errors on Windows.</li>\n<li>Fix incorrect validation errors when flashing bzip2 images.</li>\n<li>Fix <code>cscript is not recognised as an internal or external command</code> Windows error.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.14 - 2016-09-12",
							"content": "<h3>Features</h3>\n<ul>\n<li>Allow archive images to configure a certain amount of bytes to be zeroed out from the beginning of the drive when using bmaps.</li>\n<li>Make the &quot;Need help?&quot; link dynamically open the image support url.</li>\n<li>Add <code>.bmap</code> support.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Don't clear the drive selection if clicking the &quot;Retry&quot; button.</li>\n<li>Fix &quot;<code>modal.dismiss</code> is not a function&quot; exception.</li>\n<li>Prevent <code>ENOSPC</code> if the drive capacity is equal to the image size.</li>\n<li>Prevent failed validation due to drive getting auto-mounted in GNU/Linux.</li>\n<li>Fix incorrect estimated entry sizes in certain ZIP archives.</li>\n<li>Show device id if device doesn't have an assigned drive letter in Windows.</li>\n<li>Fix <code>blkid: command not found</code> error in certain GNU/Linux distributions.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Upgrade <code>etcher-image-stream</code> to v4.3.0.</li>\n<li>Upgrade <code>drivelist</code> to v3.3.0.</li>\n<li>Improve speed when retrieving archive image metadata.</li>\n<li>Improve image full file name modal tooltip.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.13 - 2016-08-05",
							"content": "<h3>Features</h3>\n<ul>\n<li>Show &quot;Unmounting...&quot; while unmounting a drive.</li>\n<li>Perform drive auto-selection even when there is no selected image.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Prevent selected drive from getting auto-removed when navigating back to the main screen from another screen.</li>\n<li>Fix new available drives not being recognised automatically in Windows.</li>\n<li>Fix application stuck at &quot;Finishing&quot;.</li>\n<li>Display an error if no graphical polkit authentication agent was found.</li>\n<li>Only enable error reporting if running inside an <code>asar</code>.</li>\n<li>Fix &quot;backdrop click&quot; uncaught errors on modals.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Fix internal removable drives considered system drives in macOS Sierra.</li>\n<li>Upgrade <code>etcher-image-write</code> to v6.0.1.</li>\n<li>Upgrade <code>removedrive</code> to v1.0.0.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.12 - 2016-07-26",
							"content": "<h3>Features</h3>\n<ul>\n<li>Support rich image extensions.</li>\n<li>Add support for <code>raw</code> images.</li>\n<li>Display a nice alert ribbon if drive runs out of space.</li>\n<li>Validate the existence of the passed drive.</li>\n<li>Add an &quot;unsafe&quot; option to bypass drive protection.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Escape quotes from image paths to prevent Bash errors on GNU/Linux and OS X.</li>\n<li>Check if drive is large enough using the final uncompressed size of the image.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Upgrade <code>drivelist</code> to v3.2.4.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.11 - 2016-07-17",
							"content": "<h3>Features</h3>\n<ul>\n<li>Set dialog default directory to the place where the AppImage was run from in GNU/Linux.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Don't throw an &quot;Invalid image&quot; error if the extension is not in lowercase.</li>\n<li>Fix <code>ENOENT</code> error when selecting certain images with multiple extensions on GNU/Linux.</li>\n<li>Fix flashing not starting when an image name contains a space.</li>\n<li>Fix error when writing images containing parenthesis in GNU/Linux and OS X.</li>\n<li>Fix error when cancelling an elevation request.</li>\n<li>Fix incorrect ETA numbers in certain timezones.</li>\n<li>Fix state validation error when speed equals zero.</li>\n<li>Display <code>*.zip</code> in the supported images tooltip.</li>\n<li>Fix uncaught exception when showing the update notifier modal.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Upgrade <code>etcher-image-write</code> to v5.0.2.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.10 - 2016-06-27",
							"content": "<h3>Features</h3>\n<ul>\n<li>Add support for <code>dsk</code> images.</li>\n<li>Only elevate the writer process instead of the whole application.</li>\n<li>Make sure a drive is instantly deselected if its not available anymore.</li>\n<li>Make Etcher CLI <code>--robot</code> option output parseable JSON strings.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Fix an error that prevented an AppImage from being directly ran as <code>root</code>.</li>\n<li>Ensure we pass the correct argument types to <code>electron.dialog.showErrorBox()</code>.</li>\n<li>Don't re-check for updates when navigating back to the main screen.</li>\n<li>Emit window progress even when not on the main screen.</li>\n<li>Improve aliasing of the striped progress button.</li>\n<li>Fix <code>EPERM</code> errors on Windows.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Add documentation for the Etcher CLI.</li>\n<li>Add a GitHub issue template.</li>\n<li>Open DevTools in &quot;undocked&quot; mode by default.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.9 - 2016-06-20",
							"content": "<h3>Fixes</h3>\n<ul>\n<li>Don't interpret image file name information between dots as image extensions.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.8 - 2016-06-15",
							"content": "<h3>Features</h3>\n<ul>\n<li>Display ETA during flash and check.</li>\n<li>Show an informative label if the drive is not large enough for the selected image.</li>\n<li>Show an informative label if the drive is locked (write protected).</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Prevent certain system drives to be detected as removable in GNU/Linux.</li>\n<li>Fix external resources not opening on GNU/Linux when the application is elevated.</li>\n<li>Don't show an unnecessary scroll bar in the update notifier modal.</li>\n<li>Prevent selection of invalid images by drag and drop.</li>\n<li>Fix <code>EPERM</code> errors on Windows on drives formatted with a GUID Partition Table.</li>\n<li>Prevent a very long image name from breaking the UI.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Write a document explaining Etcher's architecture.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.7 - 2016-05-26",
							"content": "<h3>Features</h3>\n<ul>\n<li>Add <code>gzip</code> compression support.</li>\n<li>Add <code>bzip2</code> compression support.</li>\n<li>Provide a GUI elevation dialog for GNU/Linux.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Fix broken image drag and drop functionality.</li>\n<li>Prevent global shortcuts from interferring with another applications.</li>\n<li>Prevent re-activating the &quot;Flash&quot; button with the keybaord shortcuts when a flash is already in process.</li>\n<li>Fix certain non-removable Windows devices not being filtered out.</li>\n<li>Display non-mountable Windows drives in the drive selector.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Upgrade Electron to v1.1.1.</li>\n<li>Various improvements to the build system.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.6 - 2016-05-12",
							"content": "<h3>Features</h3>\n<ul>\n<li>Implement update notifier modal.</li>\n<li>Implement writing by forking the Etcher CLI as a child process.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Prevent selection of drives that are not large enough for the selected image.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Remove implicit &quot;Enable&quot; from settings screen items.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.5 - 2016-05-04",
							"content": "<h3>Features</h3>\n<ul>\n<li>Add <code>xz</code> compression support.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Improve &quot;Select Image&quot; supported file types label.</li>\n<li>Fix error that prevented the application to be elevated correctly on Windows.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Deprecate GNU/Linux <code>.tar.gz</code> installers in favor of AppImages.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.4 - 2016-04-22",
							"content": "<h3>Features</h3>\n<ul>\n<li>Generate <a href=\"http://appimage.org\">AppImage</a> packages for GNU/Linux.</li>\n<li>Add application version to footer, which links to the <code>CHANGELOG</code>.</li>\n<li>Allow to bypass elevation with an environment variable (<code>ETCHER_BYPASS_ELEVATION</code>).</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Improve drive selector modal.</li>\n<li>Add dashed underline stlying to footer links.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Upgrade Electron to v0.37.6.</li>\n<li>Integrate Etcher CLI in this git repository.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.3 - 2016-04-17",
							"content": "<h3>Features</h3>\n<ul>\n<li>Show drive name in drive selector modal.</li>\n<li>Add subtle hover styling to footer links.</li>\n<li>Implement OS notifications on completion.</li>\n<li>Allow to drag and drop an image to the first step.</li>\n<li>Add Etcher logo to application footer.</li>\n<li>Add &quot;Change&quot; button links below each step.</li>\n<li>Invert progress bar stripes during validation.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Fix window contents being pushed below when opening the drive selector modal.</li>\n<li>Detect removal of selected drive.</li>\n<li>Detect MacBook SDCard readers in OS X.</li>\n<li>Improve removable drive detection on Windows.</li>\n<li>Keep one decimal in Windows drive sizes.</li>\n<li>Prevent error dialog not showing on malformed <code>Error</code> objects.</li>\n<li>Fix window being resizable on GNU/Linux.</li>\n<li>Hide drive selector modal if no available drives.</li>\n<li>Make drive selector modal react to drive auto-selection.</li>\n<li>Improve UX when attempting to re-selecta single available drive.</li>\n<li>Reset writer state on flash error.</li>\n<li>Fix <code>stream.push() after EOF</code> error when flashing unaligned images.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Compress Linux executables and libraries.</li>\n<li>Compress Windows DLLs.</li>\n<li>Make GNU/Linux binary lowercase.</li>\n<li>Replace all occurrences of &quot;burn&quot; with &quot;flash&quot;.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.2 - 2016-04-07",
							"content": "<h3>Features</h3>\n<ul>\n<li>Implement a new drive selector modal widget.</li>\n<li>Log Etcher version in Mixpanel and TrackJS events to aid debugging.</li>\n<li>Implement write validation support.</li>\n<li>Add a setting to enable/disable write validation.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Make sure window size is uniform between platforms.</li>\n<li>Fix &quot;Use same image&quot; button not preserving the image selection.</li>\n<li>Fix step vertical bars slight mis-alignment.</li>\n<li>Fix vertical spacing between success message and disk unmount notice label.</li>\n<li>Fix focus CSS style being persisted in the buttons after a click in some cases.</li>\n<li>Fix uncaught exception if no file was selected from a dialog.</li>\n<li>Fix external URL opening freezing applications in GNU/Linux.</li>\n<li>Fix code-signing issues in OS X in some systems.</li>\n</ul>\n<h3>Misc</h3>\n<ul>\n<li>Heavy general refactoring.</li>\n</ul>\n"
						}
					},
					{
						"node": {
							"title": "v1.0.0-beta.1 - 2016-03-28",
							"content": "<h3>Features</h3>\n<ul>\n<li>Allow window to be dragged from anywhere.</li>\n<li>Add more application metadata to installation package.</li>\n<li>Setup code-signing for Windows.</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Fix uncaught error after rejecting elevation in OS X.</li>\n<li>Upgrade <code>drivelist</code> to v2.0.9, which includes various drive scanning improvements.</li>\n<li>Make sure error is logged if its trapped with an error dialog.</li>\n<li>Fix broken state when going to settings from the success screen.</li>\n<li>Fix <code>Cannot read property 'length' of undefined</code> frequent issue.</li>\n</ul>\n"
						}
					}
				]
			}
		},
		"pathContext": {}
	};

/***/ })

});
//# sourceMappingURL=path---changelog-a6fa672453255bc74c53.js.map