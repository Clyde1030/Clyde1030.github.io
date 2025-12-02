export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  longDescription: string;
  features: string[];
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "ml-pipeline",
    title: "Analyzing Stock Transactions with Graph Algorithm",
    description: "Built an end-to-end ML pipeline for predictive analytics with automated model training and deployment.",
    tags: ["Python", "Scikit-learn", "Docker"],
    github: "https://github.com/yourusername/project1",
    longDescription: "A comprehensive machine learning pipeline that automates the entire process from data ingestion to model deployment. The system handles data preprocessing, feature engineering, model training, validation, and deployment with continuous monitoring.",
    features: [
      "Automated data preprocessing and cleaning",
      "Feature engineering and selection",
      "Multiple model training and comparison",
      "Hyperparameter tuning with cross-validation",
      "Model versioning and deployment",
      "Real-time monitoring and alerting"
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "Docker", "MLflow", "FastAPI"]
  },
  {
    id: "data-viz-dashboard",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for real-time data visualization and analytics using modern web technologies.",
    tags: ["React", "D3.js", "PostgreSQL"],
    github: "https://github.com/yourusername/project2",
    longDescription: "An interactive dashboard that provides real-time visualization of complex datasets. Built with modern web technologies to deliver a responsive and intuitive user experience for data exploration and analysis.",
    features: [
      "Real-time data updates and visualization",
      "Multiple chart types and customization options",
      "Interactive filtering and drill-down capabilities",
      "Export functionality for reports",
      "Responsive design for all devices",
      "User authentication and role-based access"
    ],
    technologies: ["React", "TypeScript", "D3.js", "PostgreSQL", "Node.js", "WebSocket"]
  },
  {
    id: "nlp-sentiment",
    title: "NLP Sentiment Analysis",
    description: "Natural language processing project analyzing sentiment in social media data using transformer models.",
    tags: ["Python", "PyTorch", "BERT"],
    github: "https://github.com/yourusername/project3",
    longDescription: "A sophisticated NLP system that analyzes sentiment in social media posts using state-of-the-art transformer models. The system can process large volumes of text data and provide detailed sentiment insights.",
    features: [
      "Multi-class sentiment classification",
      "Entity recognition and extraction",
      "Emotion detection beyond positive/negative",
      "Batch processing for large datasets",
      "Fine-tuned BERT models for accuracy",
      "API for real-time sentiment analysis"
    ],
    technologies: ["Python", "PyTorch", "Transformers", "BERT", "FastAPI", "MongoDB"]
  },
  {
    id: "etl-pipeline",
    title: "ETL Data Pipeline",
    description: "Scalable ETL pipeline processing large datasets with Apache Spark and cloud infrastructure.",
    tags: ["Spark", "AWS", "Python"],
    github: "https://github.com/yourusername/project4",
    longDescription: "A robust ETL pipeline designed to handle large-scale data processing in the cloud. The system efficiently extracts data from multiple sources, transforms it according to business rules, and loads it into data warehouses for analysis.",
    features: [
      "Distributed data processing with Apache Spark",
      "Support for multiple data sources and formats",
      "Data quality validation and cleansing",
      "Incremental data loading",
      "Error handling and recovery mechanisms",
      "Scheduled job execution and monitoring"
    ],
    technologies: ["Apache Spark", "Python", "AWS S3", "AWS Glue", "PostgreSQL", "Airflow"]
  }
];
