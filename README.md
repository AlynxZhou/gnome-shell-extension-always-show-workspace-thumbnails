Always Show Workspace Thumbnails for GNOME Shell
================================================

Always show workspace thumbnails even there is only one workspace.
------------------------------------------------------------------

# Who?

The person who heavily uses workspaces and always wants to show workspace thumbnails even there is only one workspace after upgrading to GNOME 40.

# Why?

Since GNOME Shell 40, they (upstream) decide to hide workspace thumbnails when there is only one workspace, because "there are people who don't use multi-workspace at all so we need to support single workspace case better".

I personally think this is a bad idea, because multi-workspace is a feature and when people don't know a feature, we should tell them about it instead of hide it.

I also think that showing workspace thumbnails has little influence to people who don't use multi-workspace, but may make people who use workspaces heavily unhappy, so I create this simple extension to always show them.

# What?

This extension just hooked `ThumbnailsBox.prototype._updateShouldShow` and always set true when called.

# How?

Install this extension, and enable it in GNOME Extensions app.

# Why NOT KDE/[Input more choice if you are not a GNOME user]?

I have another extension and you can refer to [its README.md](https://github.com/AlynxZhou/gnome-shell-extension-fixed-ime-list#why-not-fcitxkdeinput-more-choice-if-you-are-not-a-gnome-user) for the answer.

# Why not upstream? I mean I hate extensions!

Upstream already made a design for the new Shell, so it's hard to argue with them and I prefer to do before I say.

# GNOME Shell upgraded and it stopped working!

Send an issue, I will upgrade it if I am still using it.
