//
// Copyright 2022 Staysail Systems, Inc.
//
// Distributed under the terms of the MIT license.
//

// configuration keys
const cdragonVersion = "cdragon.version";
const stfu = "tech.staysail.C.stfu";

async function checkForCDragon() {
  if (nova.config.get(stfu)) {
    return;
  }
  let message = "";
  let body = "";
  if (nova.config.get(cdragonVersion)) {
    title = "You can probably uninstall me!";
    body =
      "\
This extension has been superceded by the of C-Dragon extension, \
which you also seem to have already installed.\n\
\n\
You can disable or uninstall this extension to save resources.\n\
\n\
Press OK to open the Extension Library.";
  } else {
    title = "You're probably missing out!";
    body =
      "\
For a more complete and current C/C++ development environment, please switch to our C-Dragon extension.\n\
\n\
To install the C-Dragon, go to the Languages tab in the Extension Library, and \
then search for C-Dragon and install it.\n\
\n\
Afterwards you can disable or uninstall this extension to save resources.\n\
\n\
Press Ok to open the Extension Library.";
  }

  let n = new NotificationRequest("deprecated");
  n.title = title;
  n.body = body;
  n.actions = ["Ok", "Ignore For Now", "Never Remind"];

  let response = await nova.notifications.add(n);
  if (response == null) {
    return null;
  }
  switch (response.actionIdx) {
    case 0:
      nova.openConfig();
      break;
    case 1:
      return;
    case 2:
      nova.config.set(stfu, true);
      return;
  }
}

exports.activate = checkForCDragon;

exports.deactivate = function () {};
