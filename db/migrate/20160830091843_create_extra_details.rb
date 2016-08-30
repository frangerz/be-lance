class CreateExtraDetails < ActiveRecord::Migration
  def change
    create_table :extra_details do |t|
      t.string :type
      t.string :service
      t.text :description
      t.string :mobile
      t.string :home_phone
      t.string :alternate_email
      t.string :address

      t.timestamps null: false
    end
  end
end
