import React, { Component } from 'react';

import './App.css';
import Person from'./Person/Person';
import Head from'./Person/Head';



class App extends Component {
  render() {
    return (

 <div>
   <Head />
<div class="container">
    <div class="row text-center">

    <Person name="Marya" city="Amman - Jordan" img="https://media-exp1.licdn.com/dms/image/C5635AQG7FM4w2Z7v5A/profile-framedphoto-shrink_400_400/0/1601124090031?e=1611504000&v=beta&t=Xnqs0neBs067P2S6L8vSPO04qfwjmTa57Fy-UqEMkZQ" linkedIn="https://www.linkedin.com/in/marya-alzu-bi/" />
    <Person name="Feras" city="Amman - Jordan" img="https://media-exp1.licdn.com/dms/image/C4E03AQEaMkdaZ4SlbA/profile-displayphoto-shrink_400_400/0/1600934552730?e=1616630400&v=beta&t=X0XzHZW3fPioXt2UhpzxR_8cESR3jnjqywdLu3YJ_HU" linkedIn="https://www.linkedin.com/in/firasdiab/" />
    <Person name="Jacoub" city="Amman - Jordan" img="https://media-exp1.licdn.com/dms/image/C4E03AQFivRZGiqQABg/profile-displayphoto-shrink_400_400/0/1600874534239?e=1616630400&v=beta&t=OWy-CWE_pxmF0Q4UEhMJKgNWw2uV7p6U67Zag4oboR4"  linkedIn="https://www.linkedin.com/in/mohammadyacoub/"/>
    <Person name="Adam" city="Amman - Jordan" img="https://media-exp1.licdn.com/dms/image/C4E35AQFpbIJtU2LaaA/profile-framedphoto-shrink_400_400/0/1610946816372?e=1611504000&v=beta&t=A4OKaBQIpqkQEp5UFXAldQwt8QUan4HNLRYb5LWlIrI" linkedIn="https://www.linkedin.com/in/adam-abusamra/"/>
    <Person name="Sara" city="Amman - Jordan" img="https://media-exp1.licdn.com/dms/image/C4D35AQEn0ZElPmvaHA/profile-framedphoto-shrink_400_400/0/1607698296993?e=1611504000&v=beta&t=xS7Rxw8ZrrfXAJmtIxJVsNw9grVJw6DfondC3vYCfnQ" linkedIn="https://www.linkedin.com/in/saraadas/"/>
    
    </div>

</div>

 </div>


    );
  }
}

export default App;
