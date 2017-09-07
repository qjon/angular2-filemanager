# Angular2 Filemanager

This project is a very simple __Angular2 file manager__.

## Features

### v1.0.0
* update angular2-tree to verison 2.x.x
* update angular to version 4.x.x
* use ngrx/store
* prepare events for all actions
* update configuration: allowed file types filter for upload files, allow limit for uploaded file
* create examples: with backend in node, without backend on local storage

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
  
    <filemanager>Loading...</filemanager>

### Provide configuration
In your module add following lines with configuration

    import {FileManagerModule, IFileManagerConfiguration} from '../../../main';
    ...
    const fileManagerConfiguration: IFileManagerConfiguration = {
      urls: {
        foldersUrl: '/api/folder',
        filesUrl: /api/files,
        folderMoveUrl: '/api/folder/move'
      },
      isMultiSelection: true,
      mimeTypes: ['image/jpg', 'image/jpeg', 'image/png'],
      maxFileSize: 50 * 1024
    }
    ... 
    
You can create a simple configuration object, it should contains a subset of below options

* __urls__
  * _foldersUrl_ - url for create (POST), delete (DELETE), edit (PUT) and get (GET) folders
  * _filesUrl_ - url for upload (POST), edit (PUT), delete (DELETE) and get (GET) files
  * _folderMoveUrl_ -   
* __isMultiselection__ - allow/disallow multiselection
* __mimeTypes__ - list of file type mimes which are allowed to upload
* __maxFileSize__ - limit of the single file size

Then you have to provide this constant as a configuration service
   
    @NgModule({
      ...
      imports: [
        ...,
        FileManagerModule
      ],
      providers: [
        {provide: 'fileManagerConfiguration', useValue: fileManagerConfiguration}
      ],
      bootstrap: [AppComponent]
    })
    export class AppModule {
    }
    
### Create API service
    
Now you should create your own API service to communicate with backend or use existing one _FileManagerBackendApiService_.
If you create your own API service it should have implemented _IFileManagerApi_ interface
* _add(node: IOuterNode, parentNodeId: string): Observable<IOuterNode>;_ - create new node of the tree
* _load(nodeId: string): Observable<IOuterNode[]>;_ - load tree branch (if nodeId is empty string it loads root level)
* _move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode>;_ - move one node (with all its sub nodes) to another parent
* _update(node: IOuterNode): Observable<IOuterNode>;_ - update node name 
* _remove(nodeId: string): Observable<IOuterNode>;_ - remove node
* _cropFile(file: IOuterFile, bounds: ICropBounds): Observable<IOuterFile>;_ - crop file to provided bounds 
* _loadFiles(nodeId: string): Observable<IOuterFile[]>;_ - load files from given node
* _removeFile(file: IOuterFile): Observable<boolean>;_ - remove single file
* _uploadFile(file: IOuterFile): Observable<IOuterFile>;_ - do actions with uploaded file (real upload is done in ng2-upload-file)

All those actions should manipulate on two protected properties: 
* _nodes: IOuterNode[]_ - list of all loaded nodes
* _files: IFileDataProperties[]_ - list of files form current node 

You can see two examples of that service:
* [_FileManagerApiService_](src/store/fileManagerApi.service.ts) - works on local storage
* [_FileManagerBackendApiService_](src/store/fileManagerBackendApi.service.ts) - works on backend (written in node)

### Attach to any Effects

Because of using _store_, _actions_ and _effects_ you can attach to any actions by creating your own effects service.
You are able to connect to actions for doing something special (but this is not obligatory, this is only possibility):
* _FileManagerActionsService.FILEMANAGER_CROP_FILE_
* _FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS_
* _FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR_
* _FileManagerActionsService.FILEMANAGER_DELETE_FILE_
* _FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS_
* _FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_
* _FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS_
* _FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION_
* _FileManagerActionsService.FILEMANAGER_LOAD_FILES_
* _FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS_
* _FileManagerActionsService.FILEMANAGER_SELECT_ALL_
* _FileManagerActionsService.FILEMANAGER_SELECT_FILE_
* _FileManagerActionsService.FILEMANAGER_UNSELECT_FILE_
* _FileManagerActionsService.FILEMANAGER_UNSELECT_ALL_
* _FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_
* _FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR_
* _FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS_ 

## Demo

To run local demo you have to serve frontend and backend. To do this run:

* frontend:
  * using local storage
  
        npm start
        
  * or using real backend
  
        npm run startWithBackend
    
* backend

        npm run backend

Or you can see online [demo](https://qjon.github.io/angular2-filemanager/) with _local storage_

## License

Licensed under [MIT](https://github.com/qjon/angular2-filemanager/blob/master/LICENSE).
