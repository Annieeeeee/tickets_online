export class User {
    constructor(props = {}) {
      this.id = props.id
      this.name = props.name
      this.emailAddress = props.emailAddress || 'default@email.com'
      this.phoneNumber = props.phoneNumber
      this.portrait = props.portrait 
      this.gender = props.gender
      this.organization = props.organization
      this.age = props.age
    }
  }
  