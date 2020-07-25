class RecognitionSerializer < ActiveModel::Serializer
  attributes :id, :sender, :content, :employee_id
  belongs_to :employee
end
