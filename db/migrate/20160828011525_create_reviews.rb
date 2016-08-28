class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :stars
      t.integer :speed
      t.integer :quality
      t.integer :experience
      t.integer :comfort
      t.text :description
      t.string :title

      t.timestamps null: false
    end
  end
end
