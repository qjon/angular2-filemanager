# Angular2 Filemanager

This project is a very simple __Angular2 file manager__.

## Features

### v0.5.4

* fix problem with open "choose file window" 

### v0.5.3

* use 0.8.1 version of _angular2-tree_

### v0.5.2

* use 0.7.0 version of _angular2-tree_

### v0.5.1

* use 0.6.2 version of _angular2-tree_
* fix example

### v0.5.0

* add multi selection configuration
* add _onSingleFileSelect_ event, which could be use to select file

### v0.4.4

* remove title from main template
* fix crop example
* fix preview
* fix example API

### v0.4.3

* create _FileManagerUploader_ service to control upload files, it could be override by external module

### v0.4.2

* remove unnecessary export file

### v0.4.1

* manage directory structure
* upload/delete files 
* filter files in directory by mime types
* search file in directory by name
* preview files

## Installation

Install npm package

    npm i @rign/angular2-filemanager

## Usage
  
In your project put this line
  
    <filemanager  [multiSelection]="isMultiSelection" (onSingleFileSelect)="selectFile($event)">Loading...</filemanager>

## Override API

To override endpoints to manage files and directories provide special provider in you module


    const fileManagerConfiguration: IFileManagerConfiguration = {
      urls: {
        foldersUrl: '/api/folder',
        filesUrl: null,
        folderMoveUrl: '/api/folder/move'
      },
      isMultiSelection: true,   //allow multiselect (default: false)
      mimeTypes: ['image/jpg', 'image/jpeg', 'image/png'], // allow upload only selected mime types (default: [] - all types)
      maxFileSize: 50 * 1024 // max size (KB) of the file (default: 0 - no limits)
    }

    @NgModule({
        ...
        providers: [
            ...
            {
              provide: 'fileManagerConfiguration', 
              useValue: fileManagerConfiguration
            }
        ]
        ...
    })

## Demo

To run demo you have to serve frontend and backend. To do this run:

* frontend:
    
        npm start
    
* backend

        npm run backend

## TODO

* files upload progress
* multi selection events (delete, select)
