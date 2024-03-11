import { TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SharedService } from './shared.service';

describe('Service calls', () => {
    let service: SharedService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SharedService]
        });
        service = TestBed.inject(SharedService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('Service calls- getProductListDetails() should get all the clients from json server', fakeAsync(() => {
        const clients = [
            { "a": "b" }
        ]
        service.getProductListDetails().subscribe((res) => {
            expect(res).toEqual(clients);
        });

        const req = httpMock.expectOne('http://localhost:3020/products');
        expect(req.request.method).toEqual("GET");
        req.flush(clients);
        httpMock.verify();
    }));

    it('Service calls- Testing POST through enquireOrder should return observable', fakeAsync(() => {
        let data: any
        const mockResponse: any = '{ "message": "test" }';

        service.enquireOrder({
            a: 'b'
        }).subscribe((response) => {
            data = response;
        });
        const req = httpMock.expectOne('http://localhost:3020/enquiries');
        expect(req.request.method).toEqual("POST");
        req.flush(mockResponse); 
        httpMock.verify();
     
    }));


});
