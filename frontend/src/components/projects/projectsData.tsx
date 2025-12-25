import { Project, TAGS } from './types'

// List of Projects (Reversed Order)
export const projects: Project[] = [
  {
    name: "Music Recommendation Engine",
    description: (
      <>
        Created a music recommendation system based using <strong>Big Data</strong> for musics&apos;s <strong>metadata</strong>, <strong>wav recordings</strong>, <strong>waveforms</strong>, <strong>lyrics</strong>, <strong>sentiments scores</strong>, etc for precise recommendations.
      </>
    ),
    tags: [TAGS.ML_DL, TAGS.ANALYTICS, TAGS.WEB_SCRAPING, TAGS.NLP],
    repoLink: "https://github.com/ShubhPundir/Music-Recommendation-Engine",
    favorite: true,
  },
  {
    name: "CNN Music Genre Classifier",
    description: (
      <>
        Created a music genre classifier using <strong>CNN</strong> and <strong>RNN</strong> models using <strong>waveform</strong> and <strong>.wav files</strong>. Hybridized with <strong>Linguistical analysis</strong> for better accuracy.
      </>
    ),
    tags: [TAGS.ML_DL, TAGS.NLP, TAGS.CV],
    repoLink: "https://github.com/ShubhPundir/CNN-Genre-Prediction",
  },
  {
    name: "Food-Stat",
    description: (
      <>
        Built a <strong>full-stack application</strong> that scans <strong>barcodes</strong> or <strong>nutritional labels</strong> of packaged food items and evaluates whether the food is good for you, personalizing recommendations with your diet plan. Allows users to create and follow personalized <strong>diet plans</strong> with intelligent nutritional analysis and recommendations.
      </>
    ),
    tags: [TAGS.ANALYTICS, TAGS.ML_DL, TAGS.NLP, TAGS.CV, TAGS.FULL_STACK],
    repoLink: "https://github.com/TeslaC00/Food-Stat",
    favorite: true,
  },
  {
    name: "FIND-DB",
    description: (
      <>
        Built a lightweight database system with <strong>CRUD operations</strong>. Efficient search with <strong>B+Trees</strong>, <strong>Sharding</strong> and <strong>Replication</strong>.
      </>
    ),
    tags: [TAGS.FULL_STACK, TAGS.VANILLA_PROGRAMMING],
    repoLink: "https://github.com/ShubhPundir/Find-DB",
  },
  {
    name: "Mudda - A social media platform for civic issues",
    description: (
      <>
        Built a <strong>social media platform for civic issues</strong> for transparency and accountability. Developed a robust and dynamic <strong>AI workflow engine</strong> to automate the process of issue resolution and administration.
      </>
    ),
    tags: [TAGS.FULL_STACK, TAGS.NLP, TAGS.ML_DL, TAGS.CV],
    repoLink: "https://github.com/Cipher3003/Mudda",
    favorite: true,
  },
  {
    name: "MediRecord",
    description: (
      <>
        Developed a <strong>full-stack</strong> medical record management system. Added <strong>common format of medical document strategy</strong> with a smart <strong>NER (Named Entity Recognition)</strong> + <strong>CV (Computer Vision) parser</strong>.
      </>
    ),
    tags: [TAGS.FULL_STACK, TAGS.NLP, TAGS.ML_DL, TAGS.CV],
    repoLink: "https://github.com/ShubhPundir/MediRecord",
  },
  {
    name: "Delhi NCR AQI Assessment",
    description: (
      <>
        Analyzed air quality data for Delhi-NCR using <strong>statistical models</strong>. Ground CPCB data, <strong>Sentinel-5P Google Earth Engine</strong> data, hyperlocal context data from OSMX and weatherdata from IMD for analysis and making a dashboard for better visualization.
      </>
    ),
    tags: [TAGS.ANALYTICS, TAGS.ML_DL, TAGS.CV],
    repoLink: "https://github.com/anjorisarabhai/Delhi-NCR-AQI-Assessment",
  },
  {
    name: "Microsoft-Malware-Prediction",
    description: (
      <>
        Compared multiple ML modeling techniques like <strong>LightGBM</strong> with robust <strong>feature engineering methodologies</strong> like <strong>ReliefF</strong> for getting an accuracy of <strong>67.6%</strong>. Kaggle competition winner achieved <strong>69.55%</strong> accuracy.chine
      </>
    ),
    tags: [TAGS.ML_DL],
    repoLink: "https://github.com/ShubhPundir/Microsoft-Malware-ML-Prediction",
  },
  {
    name: "Tableau YouTube Data Analysis",
    description: (
      <>
        Created interactive <strong>Tableau dashboards</strong> for <strong>YouTube data</strong>. Performed comprehensive <strong>data visualization</strong> and <strong>exploratory data analysis</strong> on video metrics, channel performance, engagement rates, and trending patterns to derive actionable insights.
      </>
    ),
    tags: [TAGS.ANALYTICS],
    repoLink: "https://github.com/ShubhPundir/Tableau-YouTube-Data-Analysis",
  },
  {
    name: "PII deIdentification",
    description: (
      <>
        Built a system to anonymize <strong>personally identifiable information (PII)</strong>. Implemented <strong>NER (Named Entity Recognition)</strong> models using <strong>deep learning</strong> techniques to detect and mask sensitive data like names, addresses, phone numbers, and social security numbers while preserving data utility.
      </>
    ),
    tags: [TAGS.NLP, TAGS.ML_DL],
    repoLink: "https://github.com/ShubhPundir/PII-deIdentification",
  },
  {
    name: "Time-Table Scheduling",
    description: (
      <>
        Developed an <strong>algorithm from scratch</strong> for efficient <strong>timetable scheduling</strong>. Designed a constraint-based optimization system to automatically generate conflict-free schedules for multiple courses, classrooms, and time slots while maximizing resource utilization.
      </>
    ),
    tags: [TAGS.VANILLA_PROGRAMMING],
    repoLink: "https://github.com/ShubhPundir/Time-Table-Scheduling",
  },
  {
    name: "Topic-Modelling Analysis",
    description: (
      <>
        Applied <strong>NLP techniques</strong> to identify topics in <strong>large text corpora</strong>. Utilized <strong>Latent Dirichlet Allocation (LDA)</strong> and <strong>BERT-based embeddings</strong> for unsupervised topic discovery, enabling automated content categorization and trend analysis across extensive document collections.
      </>
    ),
    tags: [TAGS.NLP, TAGS.ANALYTICS],
    repoLink: "https://github.com/ShubhPundir/Topic-Modelling",
  },
  {
    name: "Image-Caption Generator",
    description: (
      <>
        Built a <strong>deep learning model</strong> to generate <strong>image captions</strong>. Implemented an <strong>encoder-decoder architecture</strong> combining <strong>CNN</strong> for image feature extraction and <strong>LSTM/Transformer</strong> networks for natural language generation, achieving contextual and accurate image descriptions.
      </>
    ),
    tags: [TAGS.ML_DL, TAGS.CV],
    repoLink: "https://github.com/ShubhPundir/Image-Caption-Generator",
  },
  {
    name: "YOLO Drowsiness",
    description: (
      <>
        Implemented a <strong>YOLO-based</strong> <strong>drowsiness detection</strong> system. Developed a real-time computer vision application using <strong>YOLO object detection</strong> and <strong>facial landmark recognition</strong> to monitor eye closure patterns and head pose, triggering alerts for driver fatigue prevention.
      </>
    ),
    tags: [TAGS.ML_DL, TAGS.CV],
    repoLink: "https://github.com/ShubhPundir/YOLO-Drowsiness",
  },
  {
    name: "Sentiment Score WebApp",
    description: (
      <>
        Developed a <strong>web app</strong> for <strong>sentiment analysis</strong> of text data. Integrated <strong>web scraping</strong> capabilities to extract blog content and applied <strong>NLP models</strong> including <strong>BERT</strong> and <strong>VADER</strong> sentiment analyzers to classify text as positive, negative, or neutral with confidence scores.
      </>
    ),
    tags: [TAGS.WEB_SCRAPING, TAGS.NLP],
    repoLink: "https://github.com/ShubhPundir/SentimentScoreFromBlogs",
  },
  {
    name: "Rental-Apartment-Regressor",
    description: (
      <>
        Created a <strong>predictive model</strong> for estimating <strong>apartment rental prices</strong>. Trained multiple regression models including <strong>Random Forest</strong>, <strong>XGBoost</strong>, and <strong>Linear Regression</strong> on features like location, size, amenities, and neighborhood data to accurately predict rental prices.
      </>
    ),
    tags: [TAGS.ML_DL],
    repoLink: "https://github.com/ShubhPundir/Rental-Apartment-Analysis",
  },
  {
    name: "YouTube-Spam Filter",
    description: (
      <>
        Built an <strong>ML model</strong> to detect <strong>spam comments</strong> on <strong>YouTube videos</strong>. Implemented <strong>text classification</strong> using <strong>Naive Bayes</strong>, <strong>SVM</strong>, and <strong>neural networks</strong> with <strong>TF-IDF</strong> and <strong>word embeddings</strong> to identify and filter spam comments with high precision and recall.
      </>
    ),
    tags: [TAGS.ML_DL, TAGS.NLP],
    repoLink: "https://github.com/ShubhPundir/YouTube-Spam-Filter",
  },
  {
    name: "Caffe-Management",
    description: (
      <>
        Developed a <strong>full-stack</strong> <strong>cafe management system</strong>. Built from scratch with core programming principles, implementing <strong>inventory management</strong>, <strong>order processing</strong>, <strong>staff scheduling</strong>, and <strong>sales reporting</strong> features for efficient cafe operations.
      </>
    ),
    tags: [TAGS.VANILLA_PROGRAMMING],
    repoLink: "https://github.com/ShubhPundir/Caffe-Management",
  },
  {
    name: "Glassdoor Job Profiling Recommendation System",
    description: (
      <>
        Designed a system to recommend jobs based on <strong>Glassdoor profiles</strong>. Utilized <strong>collaborative filtering</strong> and <strong>content-based recommendation</strong> algorithms with <strong>NLP</strong> for job description analysis and <strong>similarity matching</strong> to provide personalized job recommendations to users.
      </>
    ),
    tags: [TAGS.ML_DL, TAGS.NLP],
    repoLink: "https://github.com/ShubhPundir/GlassdoorDataset",
  },
  {
    name: "CarPrice Regressor",
    description: (
      <>
        Built a <strong>machine learning model</strong> to predict <strong>car prices</strong> based on features. Applied <strong>feature engineering</strong> and trained regression models including <strong>Gradient Boosting</strong> and <strong>Random Forest</strong> on vehicle attributes like brand, model, year, mileage, and condition to estimate market prices accurately.
      </>
    ),
    tags: [TAGS.ML_DL],
    repoLink: "https://github.com/ShubhPundir/CarPrice",
  },
  {
    name: "iNeuronStoreAnalysis",
    description: (
      <>
        Developed insights into <strong>iNeuron&apos;s product sales</strong> and <strong>customer behavior</strong>. Conducted comprehensive <strong>data analysis</strong> using <strong>pandas</strong> and <strong>visualization libraries</strong> to identify sales trends, customer segmentation patterns, product performance metrics, and revenue optimization opportunities.
      </>
    ),
    tags: [TAGS.ANALYTICS],
    repoLink: "https://github.com/ShubhPundir/iNeuronStoreAnalysis",
  },
  {
    name: "Stores-Sales-Analysis + Market-Analysis",
    description: (
      <>
        Performed <strong>exploratory data analysis</strong> on <strong>sales</strong> and <strong>market trends</strong>. Analyzed historical sales data, seasonal patterns, and regional performance using <strong>statistical methods</strong> and <strong>data visualization</strong> to identify growth opportunities, optimize inventory, and understand market dynamics.
      </>
    ),
    tags: [TAGS.ANALYTICS],
    repoLink: "https://github.com/ShubhPundir/Stores-Sales-Analysis",
  },
  {
    name: "Student Expenditure Analysis",
    description: (
      <>
        Analyzed <strong>student spending patterns</strong> using <strong>statistical methods</strong>. Performed <strong>descriptive and inferential statistics</strong> to identify spending categories, budget allocation trends, and financial behavior patterns, providing insights for financial planning and resource allocation strategies.
      </>
    ),
    tags: [TAGS.ANALYTICS],
    repoLink: "https://github.com/ShubhPundir/Student-Expenditure-Analysis",
  },
]

