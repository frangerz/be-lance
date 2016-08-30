class CreateMaterials < ActiveRecord::Migration
  def change
    create_table :materials do |t|
      t.string :type
      t.text :description
      t.integer :cost
      t.integer :quantity

      t.timestamps null: false
    end
  end
end
