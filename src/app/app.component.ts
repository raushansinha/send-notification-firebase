import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor( private http: HttpClient) { }

  sendNotificationToFirebase(){
    let body = {
      "notification":{
        "title":"New Notification has arrived",
        "body":"Notification Body",
        "sound":"default",
        "click_action":"FCM_PLUGIN_ACTIVITY",
        "icon":"fcm_push_icon"
      },
      "data":{
        "param1":"value1",
        "param2":"value2"
      },
        "to":"/topics/all",
        "priority":"high",
        "restricted_package_name":""
    }
    let options = new HttpHeaders().set('Content-Type','application/json');
    try{
      this.http.post("https://fcm.googleapis.com/fcm/send",body,{
        headers: options.set('Authorization', 'key=AAAAy_4ly5Q:APA91bHFTkLAxu3nS3Q1eKWiZoywAiMiJrf_94RjI6xB-_v9l4Nu6RYQ2rny8EgQif48zH4ZSZ_AI_10cadTL9_4JaFQMJFyjX3Fz4oy1HO0oil0_fkb04rlPgbaOk_hbP6iM_c_UM4cEMN9fQ1FgOBxNIqRfyo8HQ'),
      })
      .subscribe((res) => {
       // alert("Result: " + JSON.stringify(res));
        console.log(res);
      });
    }
    catch(ex) {
      alert("Error" + ex)
    }
  }
}
