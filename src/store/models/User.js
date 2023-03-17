import Base from '@/store/models/Base';
/**
 *
 * @constructor
 */
export default function User() {
  Base.call(this); // extend
  this.id = null;
  this.email = null;
  this.phone = null;
  this.password = null;
  this.id_token = null;
  this.notification_token = null;

  this.fromJSON = (json) => {
    this.id = json.id;
    this.phone = null;
    this.email = json.email;
    this.password = json.password;
    this.id_token = json.id_token;
    this.notification_token = json.notification_token;
  };
}
