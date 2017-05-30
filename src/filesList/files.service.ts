import {Http, Response, URLSearchParams} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {IOuterFile} from "./interface/IOuterFile";
import {IFileModel} from "./interface/IFileModel";
import {FileManagerConfiguration} from "../configuration/fileManagerConfiguration.service";
import {ICropBounds} from "../crop/ICropBounds";

@Injectable()
export class FilesService {
  private url: string;

  public constructor(private http: Http, private configuration: FileManagerConfiguration) {
    this.url = configuration.fileUrl;
  }

  public crop(file: IFileModel, bounds: ICropBounds): Observable<IOuterFile> {
    return this.http.put(this.url, {id: file.getId(), bounds: bounds})
      .map((res: Response) => {
        let body = res.json();

        return body || [];
      });
  }

  public load(folderId: string): Observable<IOuterFile[]> {
    let params = new URLSearchParams();
    params.set('dirId', folderId);

    return this.http.get(this.url, {search: params})
      .map((res: Response) => {
        let body = res.json();

        return body || [];
      });
  }

  public remove(file: IFileModel) {
    let params = new URLSearchParams();
    params.set('id', file.getId().toString());

    return this.http.delete(this.url, {search: params})
      .map((res: Response) => {
        let body = res.json();

        return true;
      })
  }
}
