class CreateServices < ActiveRecord::Migration
  def change
    create_table :services do |t|
      t.string :location
      t.boolean :mobile
      t.string :title
      t.text :description
      t.text :experience
      t.string :materials
      t.integer :speed
      t.integer :cost_quality

      t.timestamps null: false
    end
  end
end
