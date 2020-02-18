<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Da_la_mediator extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'la_mediator';

    protected $fillable = [
        'lam_id',    'lam_use',    'lam_descript',    'lam_timestamp',    'lam_lab_id',    'lam_lae_id',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public $timestamps = false;
}
