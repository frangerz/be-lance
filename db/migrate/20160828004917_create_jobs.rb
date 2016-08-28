class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.integer :quote
      t.datetime :alert_at
      t.integer :duration
      t.integer :cost_per_hour

      t.timestamps null: false
    end
  end
end
