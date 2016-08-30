class CreateCompanyDetails < ActiveRecord::Migration
  def change
    create_table :company_details do |t|
      t.string :type
      t.string :company_name
      t.string :abn
      t.string :acn
      t.text :description

      t.timestamps null: false
    end
  end
end
