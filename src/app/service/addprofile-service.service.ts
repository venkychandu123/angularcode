import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddprofileServiceService {

  constructor() { }
  getDistricts() {
    return [
    { id: 'Anantapur', state_id: 'AndhraPradesh', name: 'Anantapur' },
    { id: 'Chittoor', state_id: 'AndhraPradesh', name: 'Chittoor' },
    { id: 'Anjaw', state_id: 'ArunachalPradesh', name: 'Anjaw' },
    { id: 'Changlang', state_id: 'ArunachalPradesh', name: 'Changlang' },
    { id: 'Baksa', state_id: 'Assam', name: 'Baksa' },
    { id: 'Barpeta', state_id: 'Assam', name: 'Barpeta' },
    { id: 'Wayanad', state_id: 'Kerala', name: 'Wayanad' },
    { id: 'Dhule',state_id: 'Maharashtra', name: 'Dhule' },
    ]
    }
     
    getConstituency() {
    return [
    { id: 1, districts_id: 'Anantapur', name: 'kadiri' },
    { id: 2, districts_id: 'Anantapur', name: 'puttaparthi' },
    { id: 3, districts_id: 'Chittoor', name: '	Palamaner' },
    { id: 4, districts_id: 'Chittoor', name: 'Puthalapattu (SC)'},
    { id: 5, districts_id: 'Anjaw', name: ' 2-Arunachal East Parliamentary Constituency'},
    { id: 6, districts_id: 'Anjaw', name: ' 45 – Hayuliang (ST) Assembly Constituency'},
    { id: 7, districts_id: 'Changlang', name: ' 49 – Bordumsa-Diyun Assembly Constituency'},
    { id: 8, districts_id: 'Changlang', name: ' 52 – Changlang South (ST) Assembly Constituency'},
    { id: 9, districts_id: 'Baksa', name: ' BARAMA (ST)'},
    { id: 10,districts_id: 'Baksa', name: 'TAMULPUR'},
    { id: 11, districts_id: 'Barpeta', name: 'BAGHBAR'},
    { id: 12, districts_id: 'Barpeta', name: 'CHENGA'},
    { id: 13, districts_id: 'Wayanad', name: 'Mananthavady '},
    { id: 14, districts_id: 'Wayanad', name: 'Sulthan Bathery'},
    { id: 15, districts_id: 'Dhule', name: 'Dhule Rural'},
    { id: 16, districts_id: 'Dhule', name: 'Sindkheda'},
    ]
    }
}