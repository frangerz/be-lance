class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :location
      t.text :description
      t.text :reason

      t.timestamps null: false
    end
  end
end
