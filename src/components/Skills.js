import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';
import GitLabIcon from '../assets/GitLab.svg';
import AWSIcon from '../assets/AWS.svg';
import KubernetesIcon from '../assets/Kubernetes.svg';
import ApaceAirflowIcon from '../assets/Apache Airflow.svg';
import ApacheHadoopIcon from '../assets/Apache Hadoop (1).svg';
import AzureIcon from '../assets/Azure.svg';
import JenkinsIcon from '../assets/Jenkins.svg';
import PythonIcon from '../assets/Python.svg';
import PytorchIcon from '../assets/PyTorch.svg';
import MongoDbIcon from '../assets/MongoDB.svg';
import PostgresSQLIcon from '../assets/PostgresSQL.svg';
import TensorFlowIcon from '../assets/TensorFlow.svg';
import GoIcon from '../assets/Go.svg';
import GithubIcon from '../assets/GitHub Actions.svg';
import googlecloudicon from '../assets/Google Cloud.svg'
import kerasIcon from '../assets/Keras.svg'
import scikitlearnIcon from '../assets/scikit-learn.svg'
import reactIcon from '../assets/React.svg'
import dockerIcon from '../assets/Docker.svg'
import terraformIcon from '../assets/HashiCorp Terraform.svg'
import nginxIcon from '../assets/NGINX.svg'
import javaIcon from '../assets/Java.svg'
import redisIcon from '../assets/Redis.svg'
import RIcon from '../assets/R.svg'
import javascript from '../assets/JavaScript.svg'
import mysql from '../assets/MySQL.svg'
import kafkaicon from '../assets/Apache Kafka.svg'
import istioIcon from '../assets/images/Simpleicons-Team-Simple-Istio.svg'
import grpcIcon from '../assets/logos--grpc.svg'
import elasticStack from '../assets/elastic-stack.svg'
import langchainIcon from '../assets/Langchain--Streamline-Simple-Icons.svg'
import sparkIcon from '../assets/apache-spark-5.svg'





// Define the skills with their respective categories
const skills = {
  CloudNativeTechnologies: [
    { name: 'AWS', icon: AWSIcon },
    { name: 'GCP', icon: googlecloudicon },
    { name: 'Azure', icon: AzureIcon },
    { name: 'Jenkins', icon: JenkinsIcon },
    { name: 'Docker', icon: dockerIcon },
    { name: 'Kubernetes', icon: KubernetesIcon }, 
    { name: 'Istio', icon: istioIcon },
    { name: 'NGINX', icon: nginxIcon },
    { name: 'HashiCorp Terraform', icon: terraformIcon },
    { name: 'GitLab', icon: GitLabIcon },
    { name: 'GitHub Actions', icon: GithubIcon },
    { name: 'Apache Kafka', icon: kafkaicon },    
    { name: 'gRPC', icon: grpcIcon },
    { name: 'Elastic Stack', icon: elasticStack },
  ],
  ProgrammingLanguages: [
    { name: 'Python', icon: PythonIcon },
    { name: 'GoLang', icon: GoIcon },
    { name: 'React', icon: reactIcon },
    { name: 'R', icon: RIcon },   
    { name: 'Java', icon: javaIcon },
    { name: 'JavaScript', icon: javascript },



  ],
  Databases: [
    { name: 'MongoDB', icon: MongoDbIcon },
    { name: 'PostgreSQL', icon: PostgresSQLIcon },
    { name: 'Redis', icon: redisIcon },
    { name: 'MySQL', icon: mysql },


  ],
  DataScienceAndMachineLearning: [
    { name: 'TensorFlow', icon: TensorFlowIcon },
    { name: 'PyTorch', icon: PytorchIcon },
    { name: 'Keras', icon: kerasIcon },
    { name: 'scikit-learn', icon: scikitlearnIcon },
    { name: 'Apache AirFlow', icon: ApaceAirflowIcon },
    { name: 'Apache Hadoop', icon: ApacheHadoopIcon },
    { name: 'pySpark', icon: sparkIcon },
    { name: 'Langchain', icon: langchainIcon },


  ]
};

// Styled container for the Bento grid
const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Adjust number of columns */
  grid-auto-rows: minmax(100px, auto); /* Minimum height for rows */
  gap: 20px;
  padding: 20px;

  /* Define dynamic grid areas for a Bento-style layout */
  & > :nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
  }
  & > :nth-child(2) {
    grid-column: span 2;
    grid-row: span 1;
  }
  & > :nth-child(3) {
    grid-column: span 1;
    grid-row: span 1;
  }
  & > :nth-child(4) {
    grid-column: span 3;
    grid-row: span 1;
  }
`;

const Skills = () => (
  <SkillsContainer>
    {Object.entries(skills).map(([category, skillList], index) => (
      <SkillCard key={index} title={category.replace(/([A-Z])/g, ' $1')} skills={skillList} />
    ))}
  </SkillsContainer>
);

export default Skills;