provider "aws" {
  region = "us-east-1"
}

resource "aws_dynamodb_table" "videos-table" {
  name           = "Videos"
  billing_mode = "PAY_PER_REQUEST"
  hash_key       = "videoId"

  attribute {
    name = "videoId"
    type = "S"
  }
}