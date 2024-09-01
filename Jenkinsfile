pipeline {
  agent any
  stages {
    stage("Build") {
      steps {
        script {
          echo "INFO: Build Stage"
        }
        sh 'docker build -t nextjs-docker .'
      }
    }
    stage("Deploy") {
      steps {
        script {
          echo "INFO: Deploy Stage"
        }
        sh 'docker run --net main_network --ip 10.10.10.13 nextjs-docker' 
      }
    }
  }
}