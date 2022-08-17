const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://ec2-65-2-9-251.ap-south-1.compute.amazonaws.com:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample1',
	    'sonar.projectKey':'Technologies',
	   // 'sonar.login': '9d988128860aaa457ff7729bdfdf996f55cce543',
	    'sonar.login': 'admin',
	    'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
