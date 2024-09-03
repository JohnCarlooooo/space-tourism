pipeline {
  agent any
  stages {
    stage("Build") {
      steps {
        script {
          echo "INFO: Build Stage"
          sh 'docker version'
          sh 'docker build -t nextjs-space .'
        }
      }
    }
    stage("Deploy") {
      steps {
        script {
          echo "INFO: Deploy Stage"
          sh 'docker stop nextjs-space || true && docker rm nextjs-space || true'
					sh 'docker run --name nextjs-space --restart=always --net main_network --ip 10.10.10.13 -d nextjs-space'
        }
      }
    }
  }
}