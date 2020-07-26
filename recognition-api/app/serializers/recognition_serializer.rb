class RecognitionSerializer < ActiveModel::Serializer
  attributes :id, :sender, :content
  belongs_to :employee
end
