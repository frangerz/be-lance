class CreateStockers < ActiveRecord::Migration
  def change
    create_table :stockers do |t|
      t.string :type
      t.string :company_name
      t.string :abn
      t.string :acn
      t.text :description

      t.timestamps null: false
    end
  end
end
