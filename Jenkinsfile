pipeline {
  agent {
    node {
      label 'doit'
    }
    
  }
  stages {
    stage('build') {
      steps {
        sh 'npm start'
      }
    }
  }
}