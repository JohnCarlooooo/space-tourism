pipeline {
    agent any

    environment {
        APP_NAME = "space"  
        CONTAINER_PORT = "8001"    

        // AUTO: No need to change
        DOCKER_IMAGE = "${APP_NAME}:latest"
        DOMAIN = "space.johncarlo.xyz"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Stop Old Container') {
            steps {
                sh """
                docker stop ${APP_NAME} || true
                docker rm ${APP_NAME} || true
                """
            }
        }

        stage('Run New Container') {
            steps {
                sh """
                docker run -d --name ${APP_NAME} \\
                  --network infrastructure_infra \\
                  -e VIRTUAL_HOST=${DOMAIN} \\
                  -e VIRTUAL_PORT=${CONTAINER_PORT} \\
                  ${DOCKER_IMAGE}
                """
            }
        }

        stage('Cleanup Docker') {
            steps {
                sh "docker image prune -f"
            }
        }
    }
}