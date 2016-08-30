class CreateDetails < ActiveRecord::Migration
  def change
    create_table :details do |t|
      t.string :type
      t.string :value

      t.timestamps null: false
    end
  end
end
