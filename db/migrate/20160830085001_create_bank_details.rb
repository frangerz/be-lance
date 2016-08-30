class CreateBankDetails < ActiveRecord::Migration
  def change
    create_table :bank_details do |t|
      t.string :type
      t.string :service
      t.text :description

      t.timestamps null: false
    end
  end
end
