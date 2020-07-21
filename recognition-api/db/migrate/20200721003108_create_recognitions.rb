class CreateRecognitions < ActiveRecord::Migration[6.0]
  def change
    create_table :recognitions do |t|
      t.string :sender
      t.text :content
      t.belongs_to :employee, foreign_key: true
      t.timestamps
    end
  end
end
