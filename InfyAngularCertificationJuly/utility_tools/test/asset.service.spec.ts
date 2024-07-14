import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { AssetService } from '../shared/asset.service';
import { HttpClient } from '@angular/common/http';

/////////////////////// Fetching valid data///////////////
fdescribe('Testing getData() method POST REQ', () => {

  let httpMock: HttpTestingController;
  let dataService: AssetService;
  const mockResponse: any = '{ "message": "test" }';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AssetService]
    });

    dataService = TestBed.inject(AssetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('Testing AssetService- Testing POST through AssetService should return observable',
    inject([AssetService, HttpTestingController], (service, httpMock1) => {
      let data;
      service.addAsset({
        a: 'b'
      }).subscribe((response) => {
        data = response;
      });
      const mockReq = httpMock1.expectOne('http://localhost:3020/assetDetails');
      mockReq.flush(mockResponse); // Send response when URL is given
      httpMock1.verify();
      expect(data)
        .toBe('{ "message": "test" }');
    }));

  it('Testing AssetService- service should be called using POST method',
    inject([HttpClient], (http: HttpClient) => {
      const spy = spyOn(http, 'post');
      dataService.addAsset({
        assetValue: 100,
        data: 0.5,
        unLimitedCalls: 'true',
        addOns: 'Handset-protection, Netflix Subscribtion',
        assetType: 'Prepaid'
      });
      expect(spy).toHaveBeenCalled();
    }));
});


fdescribe('Testing fetching data through AssetService', () => {

  let httpMock: HttpTestingController;
  let dataService: AssetService;
  const mockResponse: any =
    '{"a":"b"}';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AssetService]
    });

    dataService = TestBed.inject(AssetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('Testing AssetService- Testing fetching assetDetails through AssetService Service should return observable',
    inject([AssetService, HttpTestingController], (service, httpMock1) => {
      let data;
      service.getAssetDetails(1001).subscribe((response) => {
        data = response;
      });
      const mockReq = httpMock1.expectOne('http://localhost:3020/assetDetails/1001');
      mockReq.flush(mockResponse); // Send response when URL is given
      httpMock1.verify();
      expect(data)
        .toBe('{"a":"b"}');
    }));

  it('Testing AssetService- Testing fetching assetDetails through AssetService Service should be called using GET method',
    inject([HttpClient], (http: HttpClient) => {
      const spy = spyOn(http, 'get');
      dataService.getAssetDetails(1001);
      expect(spy).toHaveBeenCalled();
    }));
});




fdescribe('Testing deleting data through AssetService', () => {

  let httpMock: HttpTestingController;
  let dataService: AssetService;
  const mockResponse: any =
    'asset updated';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AssetService]
    });

    dataService = TestBed.inject(AssetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('Testing AssetService- Testing update asset through AssetService Service should return observable',
    inject([AssetService, HttpTestingController], (service, httpMock1) => {
      let data;
      service.updateAsset(1001, { assetName: 'xxxx' }).subscribe((response) => {
        data = response;
      });
      const mockReq = httpMock1.expectOne('http://localhost:3020/assetDetails/1001');
      mockReq.flush(mockResponse); // Send response when URL is given
      httpMock1.verify();
      expect(data)
        .toBe('asset updated');
    }));

  it('Testing AssetService- Testing update asset through AssetService Service should be called using update method',
    inject([HttpClient], (http: HttpClient) => {
      const spy = spyOn(http, 'patch');
      dataService.updateAsset(1001, { assetName: 'xxxx' });
      expect(spy).toHaveBeenCalled();
    }));
});
