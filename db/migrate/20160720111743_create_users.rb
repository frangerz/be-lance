class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :surname
      t.date :dob
      t.string :uuid
      t.string :scope
      t.boolean :admin
      t.string :status
      t.string :email
      t.string :password_hash
      t.string :password_salt

      t.timestamps null: false
    end
  end
end
