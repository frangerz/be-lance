class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.text :description
      t.string :title
      t.integer :allocated_time
      t.integer :quote
      t.datetime :alert_at

      t.timestamps null: false
    end
  end
end
