---
id: 14
title: How to migrate objects from Parallels Plesk Panel version 7.5 or 8.6 to Parallels Plesk Panel 9
date: 2010-10-19T14:26:03+00:00
##author: biliards
layout: post
guid: http://ittips.bilardi.net/wordpress/?p=14
permalink: /2010/10/19/how-to-migrate-objects-from-parallels-plesk-panel-version-7-5-or-8-6-to-parallels-plesk-panel-9/
categories:
  - plesk
tags:
  - howto
  - manage
---
Plesk Migration Manager (PMM) does not exist in Parallels Plesk Panel Beta, Plesk 9 Release and the first patch 9.0.1.  
The feature is under development now and will be available in the next version of Parallels Plesk Panel 9.2.

However it is still possible to migrate objects from Parallels Plesk Panel versions 7.5, 8.6 manually using Plesk Backup Manager.

You may migrate Parallels Plesk Panel as a whole or separate domains and clients. Below are the instructions.

## Migrate server

- Login to a source server with Parallels Plesk Panel 8.6 installed and create a full backup with the pleskbackup utility:

> `/usr/local/psa/bin/pleskbackup all <backup-file>`

The utility is included into the psa-backup-manager package for Plesk 8.6, verify that it is installed.

In Parallels Plesk Panel 7.5 the command line backup utility is /usr/local/psa/bin/psadump that is included into psa-bu package.

If not installed you may install Plesk Backup Manager via Autoinstaller in control panel Server -> Updater

- Copy the dump to the destination server with Parallels Plesk Panel 9 and convert the backup to version 9 with pre9-backup-convert.

> `/usr/local/psa/bin/pre9-backup-convert -v convert -d /var/lib/psa/dumps/ <backup-file>`

Where /var/lib/psa/dumps/ is Backups directory on the destination server with Parallels Plesk Panel 9.

This will create a number of backup XML files and subdirectories with data under /var/lib/psa/dumps.

- Login to Parallels Plesk Panel as administrator and change to the server backup repository:

Home -> Backup Manager -> Server Repository

There is a list of backup files in the server repository.

- Click the backup name to enter the Backup Details page.

- Select the required restoration options and click Restore to start the restoration process.

Note: you should check the Administrator&#8217;s clients option to restore all clients and domains from the backup.

## Migrate client

- Login to the source server and create a backup of clients you want to migrate or full server backup with pleskbackup:

> `/usr/local/psa/bin/pleskbackup all <backup-file>`

or

> `/usr/local/psa/bin/pleskbackup clients CLIENT.LOGIN <backup-file>`

- Copy the dump to the destination Parallels Plesk Panel 9 server and convert the backup to version 9 with pre9-backup-convert.

> `/usr/local/psa/bin/pre9-backup-convert -v convert -d /var/lib/psa/dumps/ <backup-file>`

This will create a number of backup XML files and subdirectories with data under /var/lib/psa/dumps.

- Login to Parallels Plesk Panel as administrator and create a new client with the same login of migrated client.

- Then access local backup repository of the new client:

Clients -> CLIENT NAME -> Backup Manager

Because the login of newly created client coincides with the login of client from the dump the converted backup should be shown in the repository.

- Click the backup name to enter the Backup Details page.

- Select the required restoration options and click Restore to start the restoration process.

## Migrate domain

- Login to the source server and create a backup of the domain you want to migrate or full server backup with pleskbackup:

> `/usr/local/psa/bin/pleskbackup all <backup-file>`

or

> `/usr/local/psa/bin/pleskbackup domains DOMAIN.NAME <backup-file>`

- Copy the dump to the destination Parallels Plesk Panel 9 and convert the backup to version 9 with pre9-backup-convert.

> `/usr/local/psa/bin/pre9-backup-convert -v convert -d /var/lib/psa/dumps/ <backup-file>`

This will create a number of backup XML files and subdirectories with data under /var/lib/psa/dumps.

- Login to Parallels Plesk Panel as administrator and create a new domain name that coincides with name of the migrated domain from backup.

- Then access the local backup repository of the domain:

Domains -> DOMAIN.NAME -> Backup Manager

Because new domain name coincides with domain from the backup the converted backup should be shown in the repository.

- Click the backup name to enter the Backup Details page.

- Select the required restoration options and click Restore to start the restoration process.

Before migrating from Parallels Plesk Panel 8.1, 8.2, 8.3, 8.4 you should upgrade the source Parallels Plesk Panel to the latest version 8.6.

To migrate objects from Parallels Plesk Panel version 7.5 using Plesk Backup Manager you should create a backup on the source server 7.5 with the utility /usr/local/psa/bin/pleskdump, convert it to version 8 with utility backup-convert and then convert to version 9 with pre9-backup-convert.

Refer to the article Is it possible to restore Plesk 7.5 backup on Plesk 8.x system? for details about how to convert backup to version 8.  
After that you may restore the backup through Backup Manager in the control panel.

Alternatively you may migrate from 7.5 to 8.6 using Plesk Migration Manager, create a backup via Parallels Plesk Panel 8.6, convert it to 9 with pre9-backup-convert and restore on destination Parallels Plesk Panel 9.

Reference: [parallels.com](http://kb.parallels.com/en/5864)
