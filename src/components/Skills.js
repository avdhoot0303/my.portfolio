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

// Define the skills with their respective categories
const skills = {
  frontEnd: [
    // Add front-end skills here if you have any
    { name: 'React', icon: reactIcon },
  ],
  
  CICD: [
    
  ],
  Languages_and_frameworks: [
    { name: 'Python', icon: PythonIcon },
    { name: 'GoLang', icon: GoIcon },
    { name: 'Terraform', icon: terraformIcon },
    { name: 'Docker', icon: dockerIcon },
    { name: 'Keras', icon: kerasIcon },
    { name: 'sci-kit learn', icon: scikitlearnIcon },
    { name: 'TensorFlow', icon: TensorFlowIcon },
    { name: 'Pytorch', icon: PytorchIcon },
    { name: 'ApacheHadoop', icon: ApacheHadoopIcon },
    
  ],
  Tools_and_platforms: [
    { name: 'Google Cloud', icon: googlecloudicon },
    ,
    { name: 'AWS', icon: AWSIcon },
    { name: 'Azure', icon: AzureIcon },
    { name: 'Kubernetes', icon: KubernetesIcon },
    { name: 'MongoDb', icon: MongoDbIcon },
    { name: 'PostgresSQL', icon: PostgresSQLIcon },
    { name: 'GitLab', icon: GitLabIcon },
    { name: 'GitHub Actions', icon: GithubIcon },
    { name: 'Jenkins', icon: JenkinsIcon },
    { name: 'Web server', icon: nginxIcon },
  ]
};

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Skills = () => (
  <SkillsContainer>
    {skills.Languages_and_frameworks.length > 0 && <SkillCard title="Languages and Frameworks" skills={skills.Languages_and_frameworks} />}
    {skills.Tools_and_platforms.length > 0 && <SkillCard title="Tools and Platforms" skills={skills.Tools_and_platforms} />}

  </SkillsContainer>
);

export default Skills;
