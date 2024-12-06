# Ancestry Application Technical Documentation

## Project Overview
A modern, cloud-native ancestry application built with microservices architecture on AWS, enabling users to create and manage family trees, store media, generate family history books, and leverage AI for enhanced genealogical research.

## Architecture Design

### System Architecture
- **Cloud Platform**: AWS (Amazon Web Services)
- **Architecture Style**: Microservices
- **API Gateway**: Amazon API Gateway
- **Service Discovery**: AWS Cloud Map
- **Load Balancing**: Application Load Balancer (ALB)
- **Container Orchestration**: Amazon ECS/EKS

### Service Breakdown

#### Authentication Service (`/services/auth`)
- **Purpose**: Handle user authentication and authorization
- **Tech Stack**: Node.js, Express
- **Database**: PostgreSQL
- **Key Features**:
  - JWT token management
  - OAuth2 integration
  - MFA support
  - Session management
  - Role-based access control (RBAC)

#### User Service (`/services/user`)
- **Purpose**: Manage user profiles and preferences
- **Tech Stack**: Node.js, Express
- **Database**: PostgreSQL
- **Key Features**:
  - Profile management
  - User preferences
  - Subscription management
  - Usage analytics

#### Family Tree Service (`/services/family-tree`)
- **Purpose**: Handle family tree data and relationships
- **Tech Stack**: Java Spring Boot
- **Database**: Neo4j
- **Key Features**:
  - Tree structure management
  - Relationship mapping
  - Tree sharing and collaboration
  - Version control
  - Merge capabilities

#### Media Service (`/services/media`)
- **Purpose**: Manage user-uploaded media
- **Tech Stack**: Python FastAPI
- **Storage**: Amazon S3
- **Database**: MongoDB
- **Key Features**:
  - Image/document upload
  - Metadata management
  - Face recognition
  - OCR processing
  - Media organization

#### Story Service (`/services/story`)
- **Purpose**: Handle family stories and narratives
- **Tech Stack**: Node.js, Express
- **Database**: MongoDB
- **Key Features**:
  - Story creation/editing
  - Rich text support
  - Media embedding
  - Collaborative editing
  - AI-powered content enhancement

#### Book Service (`/services/book`)
- **Purpose**: Generate family history books
- **Tech Stack**: Python FastAPI
- **Database**: PostgreSQL
- **Key Features**:
  - Template management
  - PDF generation
  - Custom layouts
  - Print-ready output
  - Multiple format support

#### GEDCOM Service (`/services/gedcom`)
- **Purpose**: Handle GEDCOM file operations
- **Tech Stack**: Python FastAPI
- **Database**: PostgreSQL
- **Key Features**:
  - GEDCOM import/export
  - Format validation
  - Data mapping
  - Error handling

## Infrastructure Details

### AWS Resources
- **Compute**: 
  - ECS/EKS for container orchestration
  - Lambda for serverless functions
- **Storage**:
  - S3 for media storage
  - EFS for shared filesystem
- **Database**:
  - RDS for PostgreSQL
  - DocumentDB for MongoDB
  - Amazon Neptune alternative for Neo4j
- **Caching**: ElastiCache
- **Search**: OpenSearch
- **CDN**: CloudFront

### Security Implementation
- **Authentication**:
  - Cognito User Pools
  - Custom JWT implementation
  - MFA enforcement
- **Authorization**:
  - IAM roles and policies
  - Service-to-service authentication
- **Data Protection**:
  - KMS encryption
  - SSL/TLS encryption
  - VPC security groups
- **Monitoring**:
  - CloudWatch
  - X-Ray
  - Security Hub

## Development Guidelines

### Code Standards
- **Backend**:
  - RESTful API design
  - OpenAPI/Swagger documentation
  - Unit test coverage >80%
  - Error handling standardization
- **Frontend**:
  - Component-based architecture
  - State management with Redux
  - Responsive design
  - Accessibility compliance

### CI/CD Pipeline
- **Source Control**: GitHub
- **CI/CD**: GitHub Actions
- **Deployment Stages**:
  - Development
  - Testing
  - Staging
  - Production
- **Quality Gates**:
  - Linting
  - Unit tests
  - Integration tests
  - Security scans
  - Performance testing

### Monitoring and Logging
- **Metrics Collection**: CloudWatch
- **Log Aggregation**: CloudWatch Logs
- **APM**: X-Ray
- **Alerting**: SNS
- **Dashboards**: Grafana

## API Specifications

### REST APIs
Each service exposes RESTful endpoints following OpenAPI 3.0 specifications:
- Authentication endpoints (/auth/*)
- User management endpoints (/users/*)
- Family tree operations (/trees/*)
- Media management (/media/*)
- Story management (/stories/*)
- Book generation (/books/*)
- GEDCOM operations (/gedcom/*)

### Event-Driven Communication
- **Message Broker**: Amazon EventBridge
- **Event Types**:
  - UserCreated
  - TreeUpdated
  - MediaUploaded
  - StoryPublished
  - BookGenerated

## Database Schemas

### PostgreSQL Schemas
- User accounts and profiles
- Subscription information
- Book generation metadata
- GEDCOM processing data

### MongoDB Collections
- Media metadata
- Stories and narratives
- User activity logs

### Neo4j Graph Structure
- Family tree nodes and relationships
- Person properties
- Relationship properties
- Historical connections

## Frontend Architecture

### React Application Structure
```
src/
├── components/
│   ├── common/
│   ├── auth/
│   ├── tree/
│   ├── media/
│   └── stories/
├── pages/
├── hooks/
├── services/
├── store/
└── utils/
```

### State Management
- Redux for global state
- React Query for API state
- Context for theme/preferences

### Routing Structure
- Protected routes
- Public routes
- Nested routes for tree navigation

## Deployment Strategy

### Infrastructure as Code
- Terraform for AWS resources
- CloudFormation for specific AWS services
- Kubernetes manifests for container deployment

### Environment Configuration
- Development
- Testing
- Staging
- Production

### Backup and Recovery
- Automated database backups
- S3 versioning
- Disaster recovery procedures
- Business continuity planning

## Performance Optimization

### Caching Strategy
- API response caching
- Database query caching
- CDN for static assets
- Browser caching policies

### Scaling Policies
- Auto-scaling groups
- Load balancer configuration
- Database read replicas
- Cache distribution

## Security Measures

### Data Protection
- Encryption at rest
- Encryption in transit
- Regular security audits
- Penetration testing

### Compliance
- GDPR compliance
- Data privacy measures
- Regular compliance audits
- Data retention policies

## Future Enhancements

### Planned Features
- AI-powered relationship suggestions
- Advanced DNA matching
- Automated story generation
- Mobile application
- Offline capabilities

### Technical Improvements
- GraphQL API layer
- Real-time collaboration
- Enhanced search capabilities
- Machine learning integration
