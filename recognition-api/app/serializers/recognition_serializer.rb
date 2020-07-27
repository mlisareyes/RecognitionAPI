class RecognitionSerializer < ActiveModel::Serializer
  attributes :id, :sender, :content, :employee_id, :created_at
  belongs_to :employee
end
