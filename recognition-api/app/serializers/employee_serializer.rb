class EmployeeSerializer < ActiveModel::Serializer
  attributes :name
  has_many :recognitions
end
