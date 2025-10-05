# Deployment and Release Management

This document explains how to use the automated deployment and release management system for the Susith Alwis Portfolio.

## Deployment Environments

### Development Environment
- **URL**: http://susith-portfolio-dev.s3-website-us-east-1.amazonaws.com
- **Trigger**: PR comments or manual dispatch
- **Purpose**: Testing changes before production

### Production Environment
- **URL**: http://susith-portfolio-prod.s3-website-us-east-1.amazonaws.com
- **Trigger**: GitHub releases or manual dispatch
- **Purpose**: Live website

## How to Deploy

### 1. Development Deployment (PR Testing)

#### Method 1: PR Comment Deployment
1. Create a Pull Request with your changes
2. Comment `/deploy dev` in the PR
3. Watch for automated status comments
4. Visit dev URL to test changes

#### Method 2: Manual Deployment
1. Go to **Actions** → **Deploy to S3 (dev)**
2. Click **Run workflow**
3. Monitor deployment progress

### 2. Production Deployment

#### Method 1: Release-based (Recommended)
1. Create a release using the script:
   ```bash
   ./scripts/create-release.sh 1.0.0
   ```
2. This automatically:
   - Creates a Git tag
   - Generates a GitHub release
   - Triggers production deployment
   - Updates deployment status

#### Method 2: Manual Production Deploy
1. Go to **Actions** → **Deploy to S3 (production)**
2. Type "DEPLOY" to confirm
3. Click **Run workflow**

## Release Management

### Creating Releases

Use the provided script for consistent releases:

```bash
# Stable releases
./scripts/create-release.sh 1.0.0
./scripts/create-release.sh 1.1.0

# Pre-releases
./scripts/create-release.sh 1.2.0-beta
./scripts/create-release.sh 2.0.0-rc.1
```

### Release Process
1. **Tag Creation**: Script creates semantic version tag
2. **Auto Release**: GitHub workflow creates release with changelog
3. **Auto Deploy**: Production deployment triggered automatically
4. **Status Tracking**: Deployment status visible in GitHub

## Monitoring Deployments

### GitHub Deployments Tab
- Visit: `https://github.com/SusithD/Susith-Alwis-Profolio-2025/deployments`
- View all dev and production deployments
- See deployment status and history
- Access environment URLs directly

### GitHub Releases Tab
- Visit: `https://github.com/SusithD/Susith-Alwis-Profolio-2025/releases`
- View all production releases
- See auto-generated changelogs
- Track release deployment status

### GitHub Actions
- Visit: `https://github.com/SusithD/Susith-Alwis-Profolio-2025/actions`
- Monitor workflow execution
- View deployment logs
- Debug any issues

## Workflow Features

### Development Workflow (`deploy-s3.yml`)
- PR comment triggers (`/deploy dev`)
- Manual dispatch option
- Automatic PR status comments
- GitHub deployment tracking
- Branch-specific deployment
- CI integration (waits for tests)

### Production Workflow (`deploy-prod.yml`)
- Release-triggered deployment
- Manual deployment with confirmation
- Dev environment verification
- GitHub deployment tracking
- Production-specific configuration

### Release Workflow (`create-release.yml`)
- Automatic changelog generation
- Pre-release detection
- Semantic version validation
- Release notes enhancement

## Configuration

### Required GitHub Secrets
```
AWS_ACCESS_KEY_ID          # AWS access key
AWS_SECRET_ACCESS_KEY      # AWS secret key  
AWS_REGION                 # AWS region (e.g., us-east-1)
S3_BUCKET_NAME            # Dev S3 bucket name
S3_BUCKET_PROD_NAME       # Production S3 bucket name
```

### Permissions
The workflows require these GitHub permissions:
- `contents: read` - Read repository content
- `issues: write` - Comment on PRs
- `pull-requests: write` - Update PR status
- `deployments: write` - Create deployment records
- `actions: read` - Access workflow information

## Troubleshooting

### Common Issues

1. **Permission Errors**
   - Ensure all required secrets are set
   - Check AWS credentials have S3 access
   - Verify GitHub token permissions

2. **Deployment Failures**
   - Check Actions logs for specific errors
   - Verify S3 bucket exists and is accessible
   - Ensure build completes successfully

3. **PR Comment Not Working**
   - Comment must be exactly `/deploy dev`
   - PR must be open
   - Commenter needs write access to repo

### Debug Steps
1. Check GitHub Actions logs
2. Verify secrets are set correctly
3. Test AWS credentials manually
4. Check S3 bucket permissions
5. Review deployment status in Deployments tab

## Benefits

- **Automated Deployments**: No manual S3 sync needed
- **Environment Tracking**: Clear separation of dev/prod
- **Release Management**: Proper versioning and changelogs  
- **Status Visibility**: GitHub deployment interface
- **CI Integration**: Deploys only after tests pass
- **Safe Production**: Confirmation required for prod deploys